import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DotPattern, MeshGradient } from "@/components/shared/BackgroundPatterns";

export default function LoginPage() {
    return (
        <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 overflow-hidden px-4 py-12">
            {/* Background Graphics */}
            <MeshGradient />
            <DotPattern className="absolute inset-0 z-0 opacity-50" />

            <Card className="relative z-10 w-full max-w-md border-0 shadow-2xl rounded-2xl bg-white/90 backdrop-blur-xl ring-1 ring-slate-100">
                <CardHeader className="space-y-1 items-center text-center pb-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl flex items-center justify-center mb-4 shadow-inner ring-4 ring-white">
                        <span className="text-2xl font-black text-emerald-700 tracking-tighter">A.</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Welcome back</CardTitle>
                    <CardDescription className="text-slate-500">
                        Enter your email to sign in to Antivilla
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="m@example.com" type="email" className="bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="text-xs text-emerald-700 hover:text-emerald-800 hover:underline font-medium">
                                Forgot password?
                            </Link>
                        </div>
                        <Input id="password" type="password" className="bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-900/20 h-11 font-bold tracking-wide transition-all duration-200" asChild>
                        <Link href="/">Sign In</Link>
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white/50 backdrop-blur px-2 text-slate-500 font-medium">Or continue with</span>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full h-11 border-slate-200 bg-white hover:bg-slate-50 font-medium text-slate-700" disabled>
                        Google (Coming Soon)
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                    <div className="text-center text-sm text-slate-600 mt-2">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
