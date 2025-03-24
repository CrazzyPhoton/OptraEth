import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import axios from 'axios';

export function Content() {
    const { address, isConnected } = useAccount();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isConnected || !email) {
            alert('Please connect your wallet and enter your email address.');
            return;
        }

        const formData = {
            email,
            walletAddress: address,
        };

        try {
            await axios.post(`${import.meta.env.VITE_EXPRESS_BACKEND_URL}api/waitlist`, formData);
            alert('Entry added to the waitlist successfully!');
        } catch (err) {
            console.error('Error submitting waitlist:', err);
            alert('Entry exists in the waitlist!');
        }
    };

    return (
        <>
            <section id="home" className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                <div className="container">
                    <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '400px' }}>
                        <h2 className="card-title text-center mb-4">Join the Waitlist</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={address || ''}
                                    readOnly
                                    className="form-control text-muted"
                                    placeholder="Wallet address will appear here"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={!isConnected || !email}
                            >
                                Join Waitlist
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5 bg-light">
                <div className="container text-center">
                    <h2>About OptraEth</h2>
                    <p className="mt-3">
                        OptraEth is a cutting-edge platform designed to bridge the gap between decentralized technologies and user-friendly applications.
                        Our mission is to empower users with seamless access to DeFi, DAOs, and more.
                    </p>
                </div>
            </section>
            <section id="contact" className="py-5">
                <div className="container text-center">
                    <h2>Contact Us</h2>
                    <p className="mt-3">Feel free to reach out to us at:</p>
                    <p>Email: support@optraeth.com</p>
                    <p>Twitter: @OptraEth</p>
                </div>
            </section>
        </>

    );
}
