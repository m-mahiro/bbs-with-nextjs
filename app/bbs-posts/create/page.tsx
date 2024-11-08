"use client"

import { Button } from '@/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	username: z.string().min(2,{message:"ユーザ名は２文字以上で"}),
	title: z.string().min(2,{message:"タイトルは10文字以上で"}),
	content: z.string()
		.min(2,{message:"本文はは10文字以上で"})
		.max(2,{message:"本文はは140文字以内で"}),
});

const CreateBBSPage = () => {

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			title: "",
			content: "",
		}
	});

	async function onSubmit() {
		
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

export default CreateBBSPage
