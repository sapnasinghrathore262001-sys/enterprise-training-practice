# Day 12 – JWT Security Cleanup

## Topics Covered

1. JWT Secret
   - A secret key used to sign and verify JWT tokens.
   - It must be kept private and secure.

2. JWT Secret Rotation
   - Generate a new strong random secret.
   - Update JWT_SECRET in backend/.env.
   - Restart the backend server.

3. Token Invalidation
   - Changing JWT_SECRET makes tokens signed with the old secret invalid.
   - Users must log in again to receive new tokens.

## Practical Work Completed

- Generated a fresh JWT secret using PowerShell.
- Copied the secret to the clipboard.
- Updated JWT_SECRET in backend/.env.
- Restarted the backend server.
- Confirmed the old tokens should no longer work.

## Important Security Rules

- Never share JWT secrets or login tokens.
- Never commit .env files to Git.
- Keep credentials private.
- Rotate exposed credentials.

## Day 12 Status

- [x] Generated a new JWT secret.
- [x] Updated backend/.env.
- [x] Restarted the backend.
- [x] Created the Day 12 practice folder.
