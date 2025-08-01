import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { User, Lock, Globe, Mail, LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import logohmif from '../../../assets/logo/images.jpeg';
type LoginForm = {
    username: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        username: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log In" />
            <div className="flex min-h-screen">
                {/* ======================================= */}
                {/* ====== Left Column (Login Form) ====== */}
                {/* ======================================= */}
                <div className="relative flex w-full flex-col justify-center bg-white p-8 md:w-1/2 lg:p-16">
                    <div className="mx-auto w-full max-w-sm">
                        <h1 className="text-3xl font-bold text-gray-900">LOGIN</h1>
                        <p className="mt-2 text-sm text-gray-500">Silakan masuk untuk mengakses dashboard.</p>

                        <form className="mt-8 flex flex-col gap-4" onSubmit={submit}>
                            {/* Username Input with Icon */}
                            <div className="grid gap-2">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        id="username"
                                        type="text"
                                        required
                                        autoFocus
                                        autoComplete="username"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                        placeholder="Username"
                                        className="pl-10" // Padding to make space for the icon
                                    />
                                </div>
                                <InputError message={errors.username} />
                            </div>

                            {/* Password Input with Icon */}
                            <div className="grid gap-2">
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                        className="pl-10" // Padding to make space for the icon
                                    />
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <Button type="submit" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700" disabled={processing}>
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Login Sekarang
                            </Button>
                        </form>

                        {/* Contact Section */}
                        <div className="mt-10">
                            <h3 className="font-semibold text-gray-800">Kontak Kami</h3>
                            <div className="mt-4 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Globe className="h-5 w-5 text-gray-400" />
                                    <span>hmif@itera.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                    <span>hmif@it.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                    <span>hmif@what.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="absolute bottom-6 left-0 w-full text-center text-sm text-gray-500">
                        @ 2025 Technopreneur x Kaderisasi
                    </div>
                </div>

                {/* ======================================= */}
                {/* ====== Right Column (Info Panel) ===== */}
                {/* ======================================= */}
                <div className="relative hidden w-1/2 flex-col items-center justify-center bg-green-600 p-8 text-white md:flex">
                    {/* Background Image/Logo - as requested, the src is empty */}
                    <img
                        src={logohmif}
                        alt="HMIF ITERA Logo"
                        className="absolute z-0 h-auto w-[85%] max-w-xl opacity-10"
                    />

                    <div className="z-10 text-center">
                        <h2 className="text-lg font-medium">HALAMAN MAHASISWA INFORMATIKA</h2>
                        <h1 className="mt-1 text-4xl font-bold uppercase tracking-wider">Login Absensi</h1>
                        <h3 className="mt-4 text-xl font-bold">HIMPUNAN MAHASISWA INFORMATIKA ITERA</h3>
                        <p className="mt-4 max-w-md text-sm leading-relaxed">
                            Selamat datang di Halaman Login Absensi Himpunan Mahasiswa Informatika (HMIF) ITERA. Sistem ini dirancang untuk memudahkan mahasiswa dan pengurus dalam mengelola kehadiran pada setiap kegiatan.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
