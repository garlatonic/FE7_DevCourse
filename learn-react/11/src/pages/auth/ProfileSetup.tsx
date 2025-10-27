import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { User, Mail, FileText, Save } from "lucide-react";
import supabase from "../../utils/supabase";
import type { Claims } from "../../types/user";

export default function ProfileSetup() {
	const navigate = useNavigate();
	const [claims, setClaims] = useState<Claims>(null);
	const [isLoading, setIsLoding] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		bio: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData?.name || !formData?.email || !formData?.bio) {
			alert("값을 입력해주세요");
			return;
		}
		if (!claims) {
			alert("claims 값이 올바르지 않습니다.");
			return;
		}

		try {
			const { data, error } = await supabase
				.from("profiles")
				.update({
					email: formData.email,
					display_name: formData.name,
					bio: formData.bio,
				})
				.eq("id", claims.sub)
				.select();

			if (error) throw error;
			if (data) {
				alert("회원가입이 완료되었습니다.");
				navigate("/blog");
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const fetchProfile = async () => {
			setIsLoding(true);
			try {
				const { data, error } = await supabase.auth.getClaims();
				if (error) throw error;
				const claims = data?.claims as Claims;
				setClaims(claims);

				// 모든 데이터를 조회하는 것
				// profiles 데이터를 모두 조회하는 것
				const { data: profiles, error: profilesError } = await supabase
					.from("profiles")
					.select("*")
					.eq("id", claims?.sub || "")
					.single();

				if (profilesError) throw profilesError;

				if (profiles.bio) {
					navigate("/blog");
				}

				setFormData({
					name: profiles?.display_name || "",
					email: profiles?.email || "",
					bio: profiles.bio || "",
				});
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoding(false);
			}
		};
		fetchProfile();
	}, [navigate]);

	if (isLoading) return null;

	return (
		<div className="max-w-md mx-auto">
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					Complete Your Profile
				</h1>
				<p className="text-gray-600">
					Tell us a bit about yourself to finish setting up your account
				</p>
			</div>

			<div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							<User size={16} className="inline mr-2" />
							Full Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
							placeholder="Enter your full name"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							<Mail size={16} className="inline mr-2" />
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
							placeholder="Enter your email address"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="bio"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							<FileText size={16} className="inline mr-2" />
							Bio
						</label>
						<textarea
							id="bio"
							name="bio"
							value={formData.bio}
							onChange={handleInputChange}
							rows={4}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
							placeholder="Tell us about yourself, your interests, and what you like to write about..."
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
					>
						<Save size={16} className="mr-2" />
						Complete Setup
					</button>
				</form>

				<div className="mt-6 text-center">
					<p className="text-sm text-gray-500">
						You can always update this information later in your profile
						settings
					</p>
				</div>
			</div>
		</div>
	);
}
