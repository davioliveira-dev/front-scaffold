import {User} from '@/types/User';
import {atomWithStorage} from 'jotai/utils';

export const state = {
	user: atomWithStorage<User>('user', {} as User),
	loginDate: atomWithStorage<number | null>('loginDate', null),
};
