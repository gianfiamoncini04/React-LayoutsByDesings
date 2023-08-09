"use client";

import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';


export default function AdminPAge() {
    return <NextStudio config={config}/>;
}