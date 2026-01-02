"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Link2, Mail, MessageCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsApp = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check out this villa on Antivilla!");
        window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
    };

    const handleEmail = () => {
        const url = window.location.href;
        const subject = encodeURIComponent("Amazing Villa on Antivilla");
        const body = encodeURIComponent(`I found this amazing villa, check it out: ${url}`);
        window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 rounded-full border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                    <Share2 className="w-4 h-4" />
                    Share
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] rounded-xl">
                <DropdownMenuItem onClick={handleCopy} className="cursor-pointer gap-2 py-2.5">
                    <Link2 className="w-4 h-4" />
                    {copied ? "Link Copied!" : "Copy Link"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleWhatsApp} className="cursor-pointer gap-2 py-2.5">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleEmail} className="cursor-pointer gap-2 py-2.5">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Email
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
