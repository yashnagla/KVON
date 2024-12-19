import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneCall, Receipt, BarChart3, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
          <Receipt className="h-6 w-6" />
          <span>EasyBooks</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 text-sm font-medium hover:underline" href="#">
            <PhoneCall className="h-4 w-4" />
            1800-000-0000
          </Link>
          <Button variant="outline">Business Loans</Button>
          <Button>Log In</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Business Made Simple
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Complete accounting solution for your desktop. Manage bills, inventory, and finances all in one place.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <div className="flex space-x-2">
                    <div className="flex-shrink-0">
                      <Input className="w-[60px]" defaultValue="+91" readOnly />
                    </div>
                    <Input className="flex-1" placeholder="Enter your phone number" type="tel" />
                  </div>
                  <Button className="w-full" size="lg">
                    Get Started Free
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] lg:h-[600px]">
                  <Image
                    alt="App screenshot"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="600"
                    src="/placeholder.svg"
                    width="800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Complete Business Solution
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to manage your business effectively
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <BarChart3 className="mx-auto h-12 w-12" />
                <h3 className="text-xl font-bold text-center">Sales & Purchase Tracking</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Track all your business transactions in one place with detailed reporting
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Receipt className="mx-auto h-12 w-12" />
                <h3 className="text-xl font-bold text-center">GST Billing</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Create professional GST compliant invoices in seconds
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Package className="mx-auto h-12 w-12" />
                <h3 className="text-xl font-bold text-center">Inventory Management</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Keep track of your stock and get low inventory alerts
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Try Demo Account</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience all features with our sample demo account. No signup required.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg" variant="outline">
                  View Demo Account
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 EasyBooks. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}