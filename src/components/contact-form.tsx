"use client"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/textarea"
import { useRef, useState, useTransition } from "react"
import { sendMail } from "@/actions/sendMail"
import { InfoCircledIcon } from "@radix-ui/react-icons"

export const ContactForm = ()=>{
  const [pending,startTransition] = useTransition()
  const [contactMessage,setContactMessage]=useState({
    type:"",
    message:""
  })
  const formRef = useRef<any>(null);

  const handleSubmit = (formData: { get: (arg0: string) => any })=>{
const fname = formData.get("fname")
const lname = formData.get("lname")
const email = formData.get("email")
const message = formData.get("message")
startTransition(async()=>{
  await sendMail(fname,lname,email,message).then((data)=>{
    if(data.success)
    {
      setContactMessage({
        type:"success",
        message:data.message
      })
      formRef.current.reset();
      
    }else{
      setContactMessage({
        type:"error",
        message:data.message
      })
    }
  })
})


  }
    return <form className="space-y-4 mt-2 sm:p-4" action={handleSubmit} ref={formRef}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input name="fname" placeholder="Enter your first name" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input name="lname" placeholder="Enter your last name" required/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" placeholder="Enter your email" type="email" required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" name="message" placeholder="Enter your message" required/>
              </div>
              {contactMessage.message && <div className={`p-2 flex items-center gap-x-2  border-[1px] rounded-md text-xs ${contactMessage.type=="success" ? "border-emerald-400":"border-rose-400"}`}>
                <InfoCircledIcon />
                <p>
                {contactMessage.message}
                </p>
              </div>}
              <button
                className="bg-gradient-to-br relative group/btn from-slate-900 to-slate-900  block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--slate-800)_inset,0px_-1px_0px_0px_var(--slate-800)_inset] disabled:cursor-not-allowed disabled:opacity-80"
                type="submit"
                disabled={pending}
              
              >
                Send Message &rarr;
                <BottomGradient />
              </button>

            </form>
}
const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };