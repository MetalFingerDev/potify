// convex/spotify.ts
import { action } from './_generated/server';
import { Clerk } from '@clerk/clerk-sdk-node';

// Initialize the Clerk client using your secret key from your environment variables
// Store this in your Convex environment variables with npx convex env store CLERK_SECRET_KEY sk_...
const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY }); 

export const getSpotifyToken = action({
  args: {},
  handler: async (ctx) => {
    // 1. Get the authenticated user's Convex identity
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error('Not authenticated');
    }

    // The user's unique ID provided by Clerk is the 'subject' field
    const clerkUserId = identity.subject;

    // 2. Use Clerk's Backend SDK to retrieve the Spotify OAuth Access Token
    try {
      // NOTE: This assumes you added 'Spotify' as a social connection in Clerk
      const oauth = await clerk.users.getUserOauthAccessToken(
        clerkUserId,
        'oauth_spotify' // Clerk's provider ID for Spotify is usually 'oauth_spotify'
      );
      
      // Clerk can return multiple tokens; we'll take the first one
      const spotifyToken = oauth[0]?.token;

      if (!spotifyToken) {
         // This means the user logged in with Clerk but hasn't authorized Spotify yet
         throw new Error('Spotify OAuth token not found for user. User must log in via Spotify.');
      }

      return spotifyToken;
    } catch (e) {
      console.error('Error fetching Spotify token from Clerk:', e);
      throw new Error('Failed to retrieve Spotify access token.');
    }
  },
});

export const fetchUserPlaylists = action({
  args: {},
  handler: async (ctx) => {
    // 1. Get the authenticated user's Convex identity
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error('Not authenticated');
    }

    // The user's unique ID provided by Clerk is the 'subject' field
    const clerkUserId = identity.subject;

    // 2. Use Clerk's Backend SDK to retrieve the Spotify OAuth Access Token
    let accessToken: string;
    try {
      const oauth = await clerk.users.getUserOauthAccessToken(
        clerkUserId,
        'oauth_spotify' // Clerk's provider ID for Spotify is usually 'oauth_spotify'
      );
      
      // Clerk can return multiple tokens; we'll take the first one
      accessToken = oauth[0]?.token;

      if (!accessToken) {
         // This means the user logged in with Clerk but hasn't authorized Spotify yet
         throw new Error('Spotify OAuth token not found for user. User must log in via Spotify.');
      }
    } catch (e) {
      console.error('Error fetching Spotify token from Clerk:', e);
      throw new Error('Failed to retrieve Spotify access token.');
    }
    
    // 3. Make the authenticated API call to Spotify
    const endpoint = 'https://api.spotify.com/v1/me/playlists';
    
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Use the token here!
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // You should handle token expiration here (Spotify Refresh Token Flow)
      // Since Clerk manages refresh tokens, you might need to adjust the Clerk OAuth
      // setup to ensure the token is always fresh before calling getUserOauthAccessToken.
      throw new Error(`Spotify API error: ${response.statusText}`);
    }

    return await response.json();
  },
});