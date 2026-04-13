# LankaHorizon Travel Company

This is a modern, responsive travel agency website for "LankaHorizon Travel Company", built with Next.js and Tailwind CSS, focusing on tourism in Sri Lanka.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

The project follows a feature-based structure within the `src/` directory:

-   `src/app`: Contains all the routes for the application using the Next.js App Router.
    -   `layout.tsx`: The root layout, including the header, footer, and global components.
    -   `page.tsx`: The homepage.
    -   `/tours`: Tours and packages page.
    -   `/custom-itinerary`: Page with a form for custom tour requests.
    -   `/about`: About Us page.
    -   `/contact`: Contact page.
-   `src/components`: Reusable components used throughout the app.
    -   `layout`: Global layout components like `Header`, `Footer`, and `FloatingWhatsApp`.
    -   `sections`: Components specific to sections of a page, like `Hero`, `Testimonials`, etc.
    -   `ui`: Automatically generated components from `shadcn/ui`.
-   `src/lib`: Core logic, constants, type definitions, and data.
    -   `constants.ts`: Site-wide constants like WhatsApp number and email.
    -   `data.ts`: Static data for tours, testimonials, and FAQs.
    -   `types.ts`: TypeScript type definitions.
    -   `placeholder-images.json`: A central store for all placeholder image URLs and metadata.
-   `src/ai`: Contains the Genkit AI flows for content generation.

## Features

-   **Homepage**: A captivating introduction to Sri Lankan travel.
-   **Tour Packages**: A showcase of available tours, with direct booking via WhatsApp.
-   **Custom Itinerary Form**: A user-friendly form that constructs a detailed WhatsApp inquiry.
-   **GenAI-Powered Content**: Destination descriptions are generated using a Google Gemini-powered AI flow.
-   **WhatsApp Integration**: Core of the business logic, allowing for direct communication and booking without a complex backend. The WhatsApp number can be configured in `src/lib/constants.ts`.
-   **Responsive Design**: Mobile-first design ensures a great experience on all devices.
-   **SEO Optimized**: Each page includes relevant metadata for better search engine visibility.

## WhatsApp Integration

The application uses WhatsApp's "click to chat" feature.

-   **Base URL**: `https://wa.me/<number>`
-   **Configuration**: The phone number is stored in `src/lib/constants.ts`.
-   **Pre-filled Messages**: Buttons and forms dynamically generate and encode messages for a seamless user experience.
