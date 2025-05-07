"use server";

// No push notification functionality needed
export async function getInstallStatus() {
  return { ready: true };
}
