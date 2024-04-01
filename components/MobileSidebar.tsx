'use client';
import { Bell, CircleHelp, CircleUser, Home, LineChart, Menu, Package, Package2, Search, Settings, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';
import { ThemeToggle } from './ui/ThemeToggle';
import { menuLinks } from './Sidebar';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { HiDotsVertical } from 'react-icons/hi';

export default function MobileSidebar() {
    const pathname = usePathname();
    return (
        <>
            <div className='flex shrink-0  items-center justify-between gap-4 p-4   md:hidden  lg:px-6'>
                <Link href='/'>
                    <div className='flex items-center gap-2  md:px-0'>
                        <img src='./logo.png' className='h-10 object-contain  ' />

                        <div className='flex flex-col items-start'>
                            <h4 className=' brand m-0 text-center font-bold leading-none'>Carbon</h4>
                            <h4 className='brand mt-0  font-medium leading-none'>Cell</h4>
                        </div>
                    </div>
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <Button variant='outline' size='icon' className='shrink-0 md:hidden '>
                            <Menu className='h-5 w-5' />
                            <span className='sr-only'>Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className='flex flex-col   p-0'>
                        <div className='flex h-full  flex-col gap-2'>
                            <div className='flex h-14 items-center'>
                                <Link href='/'>
                                    <Logo />
                                </Link>
                            </div>
                            <form className='my-4 px-4'>
                                <div className='relative'>
                                    <Search className='absolute left-2.5 top-2.5 h-4 w-4 dark:text-white' />
                                    <Input
                                        type='search'
                                        placeholder='Search '
                                        className='w-full appearance-none bg-secondary pl-8 shadow-none dark:text-white dark:placeholder:text-white/90'
                                    />
                                </div>
                            </form>
                            <div className='flex-1'>
                                <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                                    {menuLinks.map((menu, index) => (
                                        <Link
                                            key={index}
                                            href={menu.link}
                                            className={`group flex items-center gap-3  rounded-lg px-3  py-2 transition-all hover:text-primary ${
                                                pathname == menu.link ? 'text-primary' : ''
                                            }`}>
                                            <div className='transition-all group-hover:scale-125'>{menu.icon}</div>
                                            <div className='transition-all group-hover:translate-x-2'>{menu.name}</div>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className='mt-auto flex flex-col gap-6 p-4'>
                                <nav className='grid items-start  text-sm font-medium'>
                                    <Link
                                        href='/notificaitons'
                                        className={`group flex items-center gap-3  rounded-lg px-3  py-2 transition-all hover:text-primary ${
                                            pathname == '/notificaitons' ? 'text-primary' : ''
                                        }`}>
                                        <div className='transition-all group-hover:scale-125'>
                                            <Bell className='size-4' />
                                        </div>
                                        <div className=' flex w-full items-center justify-between'>
                                            <span className='transition-all group-hover:translate-x-2'>Notifications</span>
                                            <Badge className=' flex size-5 shrink-0 items-center justify-center rounded'>12</Badge>
                                        </div>
                                    </Link>
                                    <Link
                                        href='/support'
                                        className={`group flex items-center gap-3  rounded-lg px-3  py-2 transition-all hover:text-primary ${
                                            pathname == '/support' ? 'text-primary' : ''
                                        }`}>
                                        <div className='transition-all group-hover:scale-125'>
                                            <CircleHelp className='size-4' />
                                        </div>
                                        <div className='flex w-full items-center justify-between transition-all group-hover:translate-x-2'>Support</div>
                                    </Link>
                                    <Link
                                        href='/settings'
                                        className={`group flex items-center gap-3  rounded-lg px-3  py-2 transition-all hover:text-primary ${
                                            pathname == '/settings' ? 'text-primary' : ''
                                        }`}>
                                        <div className='transition-all group-hover:scale-125'>
                                            <Settings className='size-4' />
                                        </div>
                                        <div className='flex w-full items-center justify-between transition-all group-hover:translate-x-2'>Settings</div>
                                    </Link>
                                </nav>
                                <Card className='bg-secondary'>
                                    <CardContent className='p-2  md:p-4 '>
                                        <div className='flex items-center gap-4'>
                                            <div className='relative w-fit'>
                                                <div className='absolute right-0 top-0 z-10 size-3 rounded-full bg-primary'></div>
                                                <Avatar className='size-8'>
                                                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span className='sr-only'>Toggle user menu</span>
                                            </div>
                                            <div className='flex flex-col '>
                                                <p className='truncate dark:text-white'>Brooklyn Simmons</p>
                                                <p className='text-xs'>brooklyn@simmons.com</p>
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant='secondary' size='icon' className='rounded-full '>
                                                        <HiDotsVertical />
                                                        <span className='sr-only'>Toggle user menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align='end'>
                                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
