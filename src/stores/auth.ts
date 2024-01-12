import { writable } from 'svelte/store';
import { type Auth, type User } from 'firebase/auth';

export const auth = writable<Auth | null>(null);
export const authUser = writable<User | null>(null);