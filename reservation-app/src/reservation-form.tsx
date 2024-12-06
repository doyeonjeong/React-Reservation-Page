import { useState } from 'react'
import { Calendar } from './components/ui/calendar'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Textarea } from './components/ui/textarea'
import { Checkbox } from './components/ui/checkbox'

export default function ReservationForm() {
  const [date, setDate] = useState<Date>()

  // Function to handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = {
      name: (e.target as any).name.value,
      company: (e.target as any).company.value,
      country: (e.target as any).country.value,
      phone: (e.target as any).phone.value,
      email: (e.target as any).email.value,
      date: date?.toISOString().split('T')[0],
      message: (e.target as any).message.value,
      termsAccepted: (e.target as any).terms.checked
    }

    alert(JSON.stringify(formData, null, 2))
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Reservation Form</CardTitle>
          <CardDescription>
            Please fill out the form below to make a reservation. Available dates: Jan 7-12, 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>

              {/* Company Input */}
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Enter company name" required />
              </div>

              {/* Country Input */}
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input id="country" placeholder="Enter your country" required />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number *</Label>
                <Input id="phone" placeholder="Enter contact number" required />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <Label>Preferred Time *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                    <SelectItem value="16:00">04:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <Label>Select Date *</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => {
                  const d = new Date(date)
                  return d < new Date('2025-01-06') ||
                        d > new Date('2025-01-12')
                }}
                className="rounded-md border"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter any additional information or special requests"
                className="min-h-[100px]"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the collection and use of my personal information
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Submit Reservation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
