import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const GOOGLE_CLIENT_ID =
    "615470386358-jrja95tthmfqai1l6s8m568daurasrij.apps.googleusercontent.com";

type GooglePayload = {
    email: string;
    name: string;
    picture?: string;
    sub: string; // ID unik user Google
};

type Props = {
    onLogin: (user: GooglePayload, idToken: string) => void;
};

export function GoogleLogin({ onLogin }: Props) {
    const buttonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!window.google || !buttonRef.current) return;

        window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (response: any) => {
            const idToken = response.credential as string;
            const payload: GooglePayload = JSON.parse(
            atob(idToken.split(".")[1])
            );
            onLogin(payload, idToken);
        },
        });

        window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        width: 300,
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="max-w-md w-full p-8 space-y-6 shadow-lg">
            <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
                AirWeather Jakarta Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
                Masuk dengan akun Google untuk mengakses dashboard cuaca dan
                kualitas udara.
            </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
            <div ref={buttonRef} />

            <p className="text-xs text-muted-foreground text-center">
                Data yang dipakai hanya nama, email, dan foto profil Google
                untuk autentikasi.
            </p>
            </div>
        </Card>
        </div>
    );
}
