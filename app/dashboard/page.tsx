"use client"
import { Button } from "@/components/ui/button"
import ProtectedRoute from "@/components/auth/protected-route-wrapper"
import useCurrentUser from "@/hooks/useCurrentUser"
import logout from "@/actions/logout"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { FloatingLabelInput } from "@/components/floating-label-input"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { usePathname } from "next/navigation"

export default function DashboardPage() {
        const pathname = usePathname()
        const { user, loading } = useCurrentUser()
        return (
                <>

                        <div className="content ml-5 pr-[5%] mt-5">
                                <div className="flex flex-col gap-3 mt-3 w-full">
                                        <h3 className="text-xl font-bold">Your Profile</h3>
                                        <div className="inputs xs:flex-col md:flex-row flex w-full gap-3">
                                                <FloatingLabelInput label="Email" value={user?.email} disabled />
                                                <FloatingLabelInput label="Name" value={user?.user_metadata?.name} disabled />
                                        </div>
                                </div>

                                <Button className="mt-5" onClick={() => logout()}>Sign Out</Button>
                        </div>
                </>
        )
}

