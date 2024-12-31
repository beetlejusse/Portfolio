"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/customs/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function TouchPage() {
  const [currentURL, setCurrentURL] = useState<string>("");
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)

    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsPending(false)
  }

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto h-screen overflow-hidden flex items-center justify-center bg-black text-white">
        <div className="mockup-browser w-[80rem] bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">
              <input
                type="text"
                value={currentURL}
                readOnly
                className="w-full text-lg text-slate-400"
              />
            </div>
          </div>
          <div className="bg-base-300 flex  justify-center items-center flex-col flex-wrap text-pretty p-12">
            <div className="w-full text-slate-400 flex items-center justify-center p-4">
              <div className="w-full max-w-xl space-y-8">
                <h1 className="text-xl font-light text-center">
                  send a contact request to me
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      className="bg-transparent border-white/20 text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason</Label>
                    <Textarea
                      id="reason"
                      className="bg-transparent border-white/20 min-h-[100px] text-white"
                      placeholder="What is the reason of contact?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Information</Label>
                    <Input
                      id="contact"
                      type="email"
                      className="bg-transparent border-white/20 text-white"
                      placeholder="How can I reach you? e.g. example@gmail.com"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2 ">
                    <Checkbox id="sponsorship" className="bg-black border border-white text-lg" />
                    <Label htmlFor="sponsorship" className=" text-lg">
                      Is this a sponsorship or partnership request?
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    {isPending ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
