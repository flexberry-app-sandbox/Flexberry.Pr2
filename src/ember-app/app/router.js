import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pr-докум-поставки-l');
  this.route('i-i-s-pr-докум-поставки-e',
  { path: 'i-i-s-pr-докум-поставки-e/:id' });
  this.route('i-i-s-pr-докум-поставки-e.new',
  { path: 'i-i-s-pr-докум-поставки-e/new' });
  this.route('i-i-s-pr-докум-распр-l');
  this.route('i-i-s-pr-докум-распр-e',
  { path: 'i-i-s-pr-докум-распр-e/:id' });
  this.route('i-i-s-pr-докум-распр-e.new',
  { path: 'i-i-s-pr-докум-распр-e/new' });
  this.route('i-i-s-pr-докум-рез-пост-l');
  this.route('i-i-s-pr-докум-рез-пост-e',
  { path: 'i-i-s-pr-докум-рез-пост-e/:id' });
  this.route('i-i-s-pr-докум-рез-пост-e.new',
  { path: 'i-i-s-pr-докум-рез-пост-e/new' });
  this.route('i-i-s-pr-клиенты-l');
  this.route('i-i-s-pr-клиенты-e',
  { path: 'i-i-s-pr-клиенты-e/:id' });
  this.route('i-i-s-pr-клиенты-e.new',
  { path: 'i-i-s-pr-клиенты-e/new' });
  this.route('i-i-s-pr-организация-l');
  this.route('i-i-s-pr-организация-e',
  { path: 'i-i-s-pr-организация-e/:id' });
  this.route('i-i-s-pr-организация-e.new',
  { path: 'i-i-s-pr-организация-e/new' });
  this.route('i-i-s-pr-пункт-погрузки-l');
  this.route('i-i-s-pr-пункт-погрузки-e',
  { path: 'i-i-s-pr-пункт-погрузки-e/:id' });
  this.route('i-i-s-pr-пункт-погрузки-e.new',
  { path: 'i-i-s-pr-пункт-погрузки-e/new' });
  this.route('i-i-s-pr-сотрудники-l');
  this.route('i-i-s-pr-сотрудники-e',
  { path: 'i-i-s-pr-сотрудники-e/:id' });
  this.route('i-i-s-pr-сотрудники-e.new',
  { path: 'i-i-s-pr-сотрудники-e/new' });
  this.route('i-i-s-pr-список-барж-l');
  this.route('i-i-s-pr-список-барж-e',
  { path: 'i-i-s-pr-список-барж-e/:id' });
  this.route('i-i-s-pr-список-барж-e.new',
  { path: 'i-i-s-pr-список-барж-e/new' });
  this.route('i-i-s-pr-список-контей-l');
  this.route('i-i-s-pr-список-контей-e',
  { path: 'i-i-s-pr-список-контей-e/:id' });
  this.route('i-i-s-pr-список-контей-e.new',
  { path: 'i-i-s-pr-список-контей-e/new' });
  this.route('i-i-s-pr-товары-l');
  this.route('i-i-s-pr-товары-e',
  { path: 'i-i-s-pr-товары-e/:id' });
  this.route('i-i-s-pr-товары-e.new',
  { path: 'i-i-s-pr-товары-e/new' });
});

export default Router;
