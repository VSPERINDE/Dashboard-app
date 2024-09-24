import {Sheet, SheetTrigger, SheetContent} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export function Sidebar(){
    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r-zinc-400 border-opacity-50 border-2  bg-background sm:flex flex-col' >
                <nav className='flex flex-col items-center gap-4 px-2 py-5'>
                    <TooltipProvider>
                        <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full' >
                            <Package className='h-4 w-4' />
                            <span className='sr-only' >Dashboard Avatar</span>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                    <Home className='h-5 w-5' />
                                    <span className='sr-only' >Home</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>Home</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                    <ShoppingBag className='h-5 w-5' />
                                    <span className='sr-only' >Orders</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>Orders</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                    <Users className='h-5 w-5' />
                                    <span className='sr-only' >Clients</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>Clients</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                    <Settings2 className='h-5 w-5' />
                                    <span className='sr-only' >Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                    <LogOut className='h-5 w-5' />
                                    <span className='sr-only' >Logout</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>Logout</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b-zinc-400 border-opacity-50 border-2 bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className='sm:hidden'>
                            <PanelBottom className='w-5 h-5'/>
                            <span className="sr-only">Abrir / Fechar Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className='sm:max-w-x'>
                        <nav className='grid gap-6 text-lg font-medium'>
                            <Link 
                            href="#"
                            className='flex h-10 w-10 bg-primary rounded-full text-lg items-center
                            justify-center text-primary-foreground md:text-base gap-2' 
                            prefetch={false}>
                            <Package className='h-5 w-5 transition-all' />
                            <span className='sr-only'>Logo</span>
                            </Link>
                            <Link 
                            href="#"
                            className='flex items-center text-muted-foreground hover:text-foreground gap-4 px-2.5' 
                            prefetch={false}>
                            <Home className='h-5 w-5 transition-all' />
                            Home
                            </Link>
                            <Link 
                            href="#"
                            className='flex items-center text-muted-foreground hover:text-foreground gap-4 px-2.5' 
                            prefetch={false}>
                            <ShoppingBag className='h-5 w-5 transition-all' />
                            Orders
                            </Link>
                            <Link 
                            href="#"
                            className='flex items-center text-muted-foreground hover:text-foreground gap-4 px-2.5' 
                            prefetch={false}>
                            <Users className='h-5 w-5 transition-all' />
                            Clients
                            </Link>
                            <Link 
                            href="#"
                            className='flex items-center text-muted-foreground hover:text-foreground gap-4 px-2.5' 
                            prefetch={false}>
                            <Settings2 className='h-5 w-5 transition-all' />
                            Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <h2>Menu</h2>
            </header>
            </div>
        </div>
    )
}