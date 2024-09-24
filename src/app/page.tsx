import { ChartOverview } from "@/components/chart";
import { Clients } from "@/components/clients";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Package, Users } from "lucide-react";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className=" border-zinc-400 border-opacity-50 border-2">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Sales
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total Sales last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">$ 40,000.00</p>
          </CardContent>
        </Card>

        <Card className=" border-zinc-400 border-opacity-50 border-2">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                New Clients
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
            New Clients last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">234</p>
          </CardContent>
        </Card>

        <Card className=" border-zinc-400 border-opacity-50 border-2">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Orders today
              </CardTitle>
              <Package className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
            Total Orders today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>

        <Card className=" border-zinc-400 border-opacity-50 border-2">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
               Total Orders
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
            Total Orders last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">2300</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Clients />
      </section>
    </main>
    
  );
}
