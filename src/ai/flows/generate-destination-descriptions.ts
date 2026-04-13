'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating short, engaging descriptions for tour destinations.
 *
 * It exports:
 * - `generateDestinationDescription`: An async function that takes a destination name as input and returns a description.
 * - `DestinationDescriptionInput`: The input type for the `generateDestinationDescription` function.
 * - `DestinationDescriptionOutput`: The output type for the `generateDestinationDescription` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DestinationDescriptionInputSchema = z.object({
  destinationName: z.string().describe('The name of the tour destination.'),
});
export type DestinationDescriptionInput = z.infer<typeof DestinationDescriptionInputSchema>;

const DestinationDescriptionOutputSchema = z.object({
  description: z.string().describe('A short, engaging description of the tour destination.'),
});
export type DestinationDescriptionOutput = z.infer<typeof DestinationDescriptionOutputSchema>;

export async function generateDestinationDescription(
  input: DestinationDescriptionInput
): Promise<DestinationDescriptionOutput> {
  return generateDestinationDescriptionFlow(input);
}

const destinationDescriptionPrompt = ai.definePrompt({
  name: 'destinationDescriptionPrompt',
  input: {schema: DestinationDescriptionInputSchema},
  output: {schema: DestinationDescriptionOutputSchema},
  prompt: `Write a short, engaging description for the Sri Lankan tour destination: {{{destinationName}}}. Target audience is tourists.

Description: `,
});

const generateDestinationDescriptionFlow = ai.defineFlow(
  {
    name: 'generateDestinationDescriptionFlow',
    inputSchema: DestinationDescriptionInputSchema,
    outputSchema: DestinationDescriptionOutputSchema,
  },
  async input => {
    const {output} = await destinationDescriptionPrompt(input);
    return output!;
  }
);
