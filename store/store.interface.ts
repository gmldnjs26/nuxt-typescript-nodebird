export interface bUser {
	// Basic User
	id: string;
	nickname?: string;
}

export interface bPost {
	// Basic Post
	user: bUser;
	content: string;
}

export interface User {
	id: string;
	nickname: string;
	followings: bUser[];
	followers: bUser[];
	posts: bPost[];
}

export interface Post {
	id: number;
	user: bUser;
	content: string;
	likers?: bUser[];
	images?: Array<any>;
	retweet?: Post;
	comments?: Array<any>;
}
