import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-pr-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-pr-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-pr-товары-l.title'),
              icon: 'book',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.title'),
            children: [{
              link: 'i-i-s-pr-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-организация-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-pr-клиенты-l',
              caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-клиенты-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-клиенты-l.title'),
              children: null
            }, {
              link: 'i-i-s-pr-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-список-контей-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-pr-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-пункт-погрузки-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-pr-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-список-барж-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-pr-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.информация-об-организации.i-i-s-pr-сотрудники-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документация.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документация.title'),
            children: [{
              link: 'i-i-s-pr-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-pr-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-pr-докум-поставки-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-pr-докум-распр-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-pr-докум-распр-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-pr-докум-распр-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-pr-докум-рез-пост-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-pr-докум-рез-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-pr-докум-рез-пост-l.title'),
              icon: 'folder open',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})