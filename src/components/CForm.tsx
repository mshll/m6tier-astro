'use client';
import AutoForm, { AutoFormSubmit } from '~/components/ui/auto-form';
import * as z from 'zod';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

// Define your form schema using zod
const formSchema = z.object({
  name: z
    .string({
      required_error: 'Your name is required.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters.',
    }),
  email: z
    .string({
      required_error: 'Your email is required.',
    })
    .min(3, { message: 'Enter a valid email.' })
    .email('Enter a valid email.'),
  message: z
    .string({
      required_error: 'Message is required.',
    })
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(160, {
      message: 'Message must not be longer than 160 characters.',
    }),
});

export default function CForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  function handleFormSubmit(validatedData: typeof formSchema.type) {
    setIsLoading(true);
    fetch('https://send.pageclip.co/6ARcWTZzcAOyqr3nv8ormuGjblrq8Bsu/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    })
      .then((response) => {
        setIsLoading(false); // set to false when done

        if (!response.ok) {
          console.error('Error sending form data:', response);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        toast({
          description: 'Your message has been sent successfully!',
        });
      })
      .catch((error) => {
        setIsLoading(false); // also set to false on error
        console.error('Error:', error);
      });
  }

  return (
    <>
      <Card className="w-full border-border text-start md:space-y-2">
        <CardContent>
          <AutoForm
            onSubmit={handleFormSubmit}
            className="pageclip-form pt-6"
            formSchema={formSchema}
            fieldConfig={{
              name: {
                inputProps: {
                  type: 'name',
                  placeholder: 'e.g. John Doe',
                },
              },
              email: {
                inputProps: {
                  type: 'email',
                  placeholder: 'e.g. example@m6tier.com',
                  pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
                },
              },
              message: {
                fieldType: 'textarea',
                inputProps: {
                  type: 'message',
                  placeholder: 'Type your message here',
                },
              },
            }}
          >
            <AutoFormSubmit className="pageclip-form__submit w-full">
              {isLoading ? (
                <span>
                  <Loader2 className="h-4 w-4 animate-spin" />
                </span>
              ) : null}
              {!isLoading ? <span>Submit</span> : null}
            </AutoFormSubmit>
          </AutoForm>
        </CardContent>
      </Card>
    </>
  );
}
