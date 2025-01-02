import React, { lazy } from 'react';
import { Routes as Router, Route } from 'react-router';
import { Routes } from './routes';
import withSuspense from '../hoc/withSuspense';
import NotFound from '../pages/notFound/notFound';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Projects = lazy(() => import('../pages/projects'));
const Resume = lazy(() => import('../pages/resume'));
const Hobby = lazy(() => import('../pages/hobby'));
const Contact = lazy(() => import('../pages/contact'));
const Galery = lazy(() => import('../pages/hobby/galery'));
const Videopage = lazy(() => import('../pages/projects/pageVideo'));
const Conditions = lazy(() => import('../pages/conditions'));
const Sertificats = lazy(() => import('../pages/sertificats'));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={withSuspense(Home)} />
    <Route path={Routes.about} element={withSuspense(About)} />
    <Route path={Routes.projects} element={withSuspense(Projects)} />
    <Route path={Routes.resume} element={withSuspense(Resume)} />
    <Route path={Routes.hobby} element={withSuspense(Hobby)} />
    <Route path={Routes.contact} element={withSuspense(Contact)} />
    <Route path={Routes.galery} element={withSuspense(Galery)} />
    <Route path={Routes.videopage} element={withSuspense(Videopage)} />
    <Route path={Routes.conditions} element={withSuspense(Conditions)} />
    <Route path={Routes.sertificats} element={withSuspense(Sertificats)} />

    <Route path="*" element={<NotFound />} />
  </Router>
);
