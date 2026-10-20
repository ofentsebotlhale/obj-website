// Maintenance Mode Configuration for OBX Studio
// Controlled via environment variables:
// - NEXT_PUBLIC_MAINTENANCE_MODE="true" | "false" (or "1" | "0")
// - Fallback to true (or false) depending on environment variable setting.

const envSetting =
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE ??
  process.env.MAINTENANCE_MODE

// Evaluates to true if explicitly set to 'true' or '1'
// If no environment variable is provided, defaults to false (or true when active)
export const MAINTENANCE_MODE: boolean =
  envSetting !== undefined
    ? envSetting === 'true' || envSetting === '1'
    : true

export const MAINTENANCE_DETAILS = {
  title: 'OBX Studio | Scheduled Maintenance',
  headline: 'UNDER MAINTENANCE',
  subheadline:
    'We are currently conducting scheduled maintenance, infrastructure upgrades, and portfolio updates to bring you an elevated digital experience. Our client operations remain fully active.',
  contactEmail: 'hello@obxstudio.co.za',
  location: 'Johannesburg — South Africa',
  instagramUrl: 'https://www.instagram.com/obxstudio_/',
  linkedinUrl: 'https://www.linkedin.com/company/obxstudio/',
  systemVersion: 'v2.5.0-release-prep',
  clientServicesStatus: 'Operational (100%)',
  estimatedReturn: 'Returning shortly',
}
