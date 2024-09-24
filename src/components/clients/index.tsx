import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Clients(){
    return(
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Last Clients
                    </CardTitle>
                    <Users className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    New clients from the last 24 hours
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b-zinc-400 border-opacity-50 border-2 py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/vsperinde.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Vitor Sperinde Lima</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">sperinde.vitor@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b-zinc-400 border-opacity-50 border-2 py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://scontent.fpoa15-1.fna.fbcdn.net/v/t39.30808-1/401043435_10231883500168442_306905849778772354_n.jpg?stp=c0.337.1365.1365a_dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=o6ynkAwL70YQ7kNvgGw9nRs&_nc_ht=scontent.fpoa15-1.fna&_nc_gid=AAMT9k4yGGiIo0V2SMYomxV&oh=00_AYB46KqO4-wfatlEG0gcm5ZGKAtBwQgzb_VSrC4hsWhPeA&oe=66F8AA2B"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Juliana Pilla</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">pillajuliana19@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b-zinc-400 border-opacity-50 border-2 py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://scontent.fpoa15-1.fna.fbcdn.net/v/t1.6435-1/165825341_5332504676820904_5342096754410923291_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=e4545e&_nc_ohc=FKXFPe3hm1sQ7kNvgG_WeVi&_nc_ht=scontent.fpoa15-1.fna&oh=00_AYCzEMyWTu04j3moOwo03rUbHgHqE1yJwmsPKb41Foq1pA&oe=671A37D9"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Camilla Sperinde Lima</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">camilla.sperinde@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b-zinc-400 border-opacity-50 border-2 py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://scontent.fpoa15-1.fna.fbcdn.net/v/t39.30808-1/339924076_1280532306149982_821579853901778436_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=mKmf7UEVmHoQ7kNvgFQnk7e&_nc_ht=scontent.fpoa15-1.fna&oh=00_AYDL1USyRxZ6jduTs_XK4BTcQhkumlwl4QK3lNfGaXrq4A&oe=66F8A83A"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Eduardo Pilla</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">eduardo_pilla@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}