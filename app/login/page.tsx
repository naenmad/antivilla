import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-4 py-12">
            <Card className="w-full max-w-md border-0 shadow-xl rounded-2xl bg-white/80 backdrop-blur">
                <CardHeader className="space-y-1 items-center text-center pb-2">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xl font-bold text-emerald-700">A.</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Welcome back</CardTitle>
                    <CardDescription className="text-slate-500">
                        Enter your email to sign in to Antivilla
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="m@example.com" type="email" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="text-xs text-emerald-700 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <Input id="password" type="password" className="bg-slate-50 border-slate-200" />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-10 font-semibold" asChild>
                        <Link href="/">Sign In</Link>
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full h-10 border-slate-200" disabled>
                        Google (Coming Soon)
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                    <div className="text-center text-sm text-slate-600 mt-2">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-semibold text-emerald-700 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
