// sanity.config.js

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

// --- 1. Define the 'Doctor Profile' form (for About page) ---
const doctorSchema = {
  name: 'doctor',
  title: 'Doctor Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      description: 'For reference only (not displayed on site)',
      initialValue: 'Dr. G.P. Kirupakaran',
      validation: Rule => Rule.required(),
    },
    {
      name: 'profileImage',
      title: 'Doctor Profile Photo',
      type: 'image',
      description: 'Upload doctor\'s professional photo. This will replace the placeholder.',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
  ],
};

// --- 2. Define the 'Website Images' form (for all site images) ---
const websiteImagesSchema = {
  name: 'websiteImages',
  title: 'Website Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Image Set Name',
      type: 'string',
      description: 'For reference only',
      initialValue: 'Salem Clinic Images',
      validation: Rule => Rule.required(),
    },
    {
      name: 'doctorPhoto',
      title: 'Doctor Profile Photo',
      type: 'image',
      description: 'Professional photo of Dr. Kirupakaran for About page',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'clinicLogo',
      title: 'Clinic Logo/Badge',
      type: 'image',
      description: 'Main clinic logo shown in header/footer',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'clinicExterior',
      title: 'Clinic Building Exterior',
      type: 'image',
      description: 'Photo of clinic building from outside',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'waitingArea',
      title: 'Waiting Area Photo',
      type: 'image',
      description: 'Reception/waiting room photo',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'consultationRoom',
      title: 'Consultation Room Photo',
      type: 'image',
      description: 'Doctor consultation room',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ultrasoundMachine',
      title: 'Ultrasound Machine Photo',
      type: 'image',
      description: 'Photo of ultrasound-guided procedure equipment',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'painManagementEquipment',
      title: 'Pain Management Equipment',
      type: 'image',
      description: 'Specialized pain management machinery/tools',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'medicalEquipment1',
      title: 'Medical Equipment Photo 1',
      type: 'image',
      description: 'Additional medical equipment (e.g., monitors, pumps)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'medicalEquipment2',
      title: 'Medical Equipment Photo 2',
      type: 'image',
      description: 'Additional medical equipment',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'medicalEquipment3',
      title: 'Medical Equipment Photo 3',
      type: 'image',
      description: 'Additional medical equipment',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'treatmentRoom',
      title: 'Treatment Room Photo',
      type: 'image',
      description: 'Room where procedures are performed',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'receptionDesk',
      title: 'Reception Desk Photo',
      type: 'image',
      description: 'Front desk/reception area',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'teamPhoto',
      title: 'Team Photo',
      type: 'image',
      description: 'Doctor with staff/team members (optional)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'certificatesWall',
      title: 'Certificates/Awards Wall',
      type: 'image',
      description: 'Wall displaying medical certificates and awards',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroBackgroundImage',
      title: 'Homepage Hero Background',
      type: 'image',
      description: 'Large background image for homepage (optional)',
      options: {
        hotspot: true,
      },
    },
  ],
};

// --- 3. Define the 'Clinic Info' form (OPTIONAL - for contact details) ---
const pageInfoSchema = {
  name: 'pageInfo',
  title: 'Clinic Info (Optional)',
  type: 'document',
  fields: [
    {
      name: 'clinicName',
      title: 'Clinic Name',
      type: 'string',
      initialValue: 'Salem Pain Clinic',
    },
    {
      name: 'clinicHours',
      title: 'Clinic Hours',
      description: 'e.g., Mon - Sat: 10:00 AM - 1:00 PM',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'primaryPhone',
      title: 'Primary Phone',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'secondaryPhone',
      title: 'Secondary Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Full Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    },
  ],
};


// --- 3. Main Configuration ---
export default defineConfig({
  name: 'default',
  title: 'Salem Pain Clinic CMS',

  // 🚨 CRITICAL: PASTE YOUR Sanity Project ID HERE
  projectId: 'd0m8dwid', 
  dataset: 'production',
  apiVersion: '2023-05-01',

  plugins: [structureTool()],

  schema: {
    // Register schemas - Only websiteImages is essential for your use case
    types: [websiteImagesSchema, doctorSchema, pageInfoSchema],
  },

  // Add Vercel Analytics
  studio: {
    components: {
      layout: (props) => {
        return React.createElement(
          React.Fragment,
          null,
          props.renderDefault(props),
          React.createElement(Analytics)
        )
      }
    }
  },
});