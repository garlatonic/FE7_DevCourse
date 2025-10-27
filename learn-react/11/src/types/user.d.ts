import type { JwtPayload } from "@supabase/supabase-js";

// 응답값의 완성된 타입 <- JwtPayload
// 응답값 타입이거나, null이거나
// 밑에 타입들은 application에 전달받은 payload중에서 갖고오기
export type Claims =
	| (JwtPayload & {
			sub: string;
			role?: string;
			user_metadata: {
				avatar_url: string;
				email: string;
				email_verified: boolean;
				full_name: string;
				iss: string;
				name: string;
				phone_verified: false;
				preferred_username: string;
				provider_id: string;
				sub: string;
				user_name: string;
			};
	  })
	| null;
