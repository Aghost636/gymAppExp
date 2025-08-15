import { account, databases, ID, Query } from '../../lib/appwrite';

const DB_ID = process.env.EXPO_PUBLIC_DATABASE_ID!;
const PROFILES_ID = process.env.EXPO_PUBLIC_PROFILES_ID!;

export async function getAuthedUser() {
  return account.get(); // throws if not logged in
}

export async function fetchMyProfile(userId: string) {
  const res = await databases.listDocuments(DB_ID, PROFILES_ID, [
    Query.equal("userId", userId),
    Query.limit(1),
  ]);
  return res.documents[0] ?? null;
}

export async function isUsernameAvailable(username: string) {
  const handle = username.trim().toLowerCase();
  const res = await databases.listDocuments(DB_ID, PROFILES_ID, [
    Query.equal("usernameLower", handle),
    Query.limit(1),
  ]);
  return res.total === 0;
}

export async function createMyProfile(userId: string, username: string) {
  const handle = username.trim();
  const now = new Date().toISOString();
  return databases.createDocument(DB_ID, PROFILES_ID, ID.unique(), {
    userId,
    username: handle,
    usernameLower: handle.toLowerCase(),
    createdAt: now,
  });
}
