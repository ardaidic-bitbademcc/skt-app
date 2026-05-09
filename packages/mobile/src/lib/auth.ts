import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

export async function getStoredUser(): Promise<User | null> {
  try {
    const raw = await AsyncStorage.getItem('user');
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export async function storeAuth(token: string, user: User): Promise<void> {
  await AsyncStorage.multiSet([
    ['token', token],
    ['user', JSON.stringify(user)],
  ]);
}

export async function clearAuth(): Promise<void> {
  await AsyncStorage.multiRemove(['token', 'user']);
}
