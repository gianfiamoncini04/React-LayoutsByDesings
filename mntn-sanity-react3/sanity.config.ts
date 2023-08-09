import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'; 
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'mpxopgdf',
    dataset: 'production',
    title: 'MNTN',
    apiVersion: '2023-08-09',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;