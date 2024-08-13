"use client";
import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input-new";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CreateMasWalletDialog() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [walletAddress, setWalletAddress] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [balance, setBalance] = useState("0");

	useEffect(() => {
		const storedAddress = localStorage.getItem("walletAddress");
		if (storedAddress) {
			setWalletAddress(storedAddress);
			fetchBalance(storedAddress);
		}
	}, []);

	const handleSubmit = async () => {
		// e.preventDefault();
		try {
			const response = await fetch("/api/maschain/wallet/create-wallet", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email }),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("API Response:", data); // Log the entire response for debugging
				if (data.result.wallet && data.result.wallet.wallet_address) {
					const address = data.result.wallet.wallet_address;
					localStorage.setItem("walletAddress", address);
					setWalletAddress(address);
					toast.success("Wallet created successfully!");
                    // window.location.href = "/";
				} else {
					throw new Error("Wallet address not found in the response");
				}
			} else {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to create wallet");
			}
		} catch (error) {
			console.error("Full error:", error);
			toast.error("Error creating wallet: " + error.message);
		}
	};

	const fetchBalance = async (address) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch("/api/maschain/token/balance", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ wallet_address: address }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch balance");
			}

			const data = await response.json();
			if (data.result) {
				setBalance(data.result);
			} else {
				throw new Error("Invalid response format");
			}
		} catch (error) {
			console.error("Error fetching balance:", error);
			setError("Failed to fetch balance. Please try again later.");
			toast.error("Error fetching balance");
		} finally {
			setIsLoading(false);
		}
	};
	if (walletAddress) {
		return (
			<div className='flex'>
				<div className='bg-blue-100 rounded-3xl text-blue-800 px-3 py-2'>
					{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
				</div>
				{/* <a
			href={`https://explorer-testnet.maschain.com//${walletAddress}`}
			target='_blank'
		>
			<ExternalLink width={16} />
		</a> */}
			</div>
		);
	}

	if (error) {
		return <div className='text-sm text-red-500'>{error}</div>;
	}

	return (
		<Dialog>
			<DialogTrigger className='bg-blue-600 rounded-3xl text-white px-3 py-2'>
				Create Wallet
			</DialogTrigger>
			<DialogContent className='bg-white'>
				<DialogHeader>
					<DialogTitle>Create Mas Wallet</DialogTitle>
					<DialogDescription>Enter your details to create a new wallet.</DialogDescription>
				</DialogHeader>
				<form  className='space-y-4'>
					<div>
						<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
							Name
						</label>
						<Input
							id='name'
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className='mt-1 '
						/>
					</div>
					<div>
						<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
							Email
						</label>
						<Input
							id='email'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className='mt-1 '
						/>
					</div>
					<Button type="button" onClick={handleSubmit} className='w-full'>
						Create Wallet
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
