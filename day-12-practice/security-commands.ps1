# Day 12 – JWT Security Cleanup Commands

# 1. Generate a fresh random JWT secret
$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$bytes = New-Object byte[] 48
$rng.GetBytes($bytes)
$newSecret = -join ($bytes | ForEach-Object { $_.ToString("x2") })
Set-Clipboard -Value $newSecret
$rng.Dispose()
Write-Host "Fresh JWT secret generated and copied."

# 2. Open backend environment file
notepad .\backend\.env

# 3. Restart backend after updating JWT_SECRET
npm run dev:backend

# IMPORTANT:
# Never save or share JWT secrets or login tokens in this file.
