import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrДокумПоставкиLForm from './forms/i-i-s-pr-докум-поставки-l';
import IISPrДокумРаспрLForm from './forms/i-i-s-pr-докум-распр-l';
import IISPrДокумРезПостLForm from './forms/i-i-s-pr-докум-рез-пост-l';
import IISPrКлиентыLForm from './forms/i-i-s-pr-клиенты-l';
import IISPrОрганизацияLForm from './forms/i-i-s-pr-организация-l';
import IISPrПунктПогрузкиLForm from './forms/i-i-s-pr-пункт-погрузки-l';
import IISPrСотрудникиLForm from './forms/i-i-s-pr-сотрудники-l';
import IISPrСписокБаржLForm from './forms/i-i-s-pr-список-барж-l';
import IISPrСписокКонтейLForm from './forms/i-i-s-pr-список-контей-l';
import IISPrТоварыLForm from './forms/i-i-s-pr-товары-l';
import IISPrДокумПоставкиEForm from './forms/i-i-s-pr-докум-поставки-e';
import IISPrДокумРаспрEForm from './forms/i-i-s-pr-докум-распр-e';
import IISPrДокумРезПостEForm from './forms/i-i-s-pr-докум-рез-пост-e';
import IISPrКлиентыEForm from './forms/i-i-s-pr-клиенты-e';
import IISPrОрганизацияEForm from './forms/i-i-s-pr-организация-e';
import IISPrПунктПогрузкиEForm from './forms/i-i-s-pr-пункт-погрузки-e';
import IISPrСотрудникиEForm from './forms/i-i-s-pr-сотрудники-e';
import IISPrСписокБаржEForm from './forms/i-i-s-pr-список-барж-e';
import IISPrСписокКонтейEForm from './forms/i-i-s-pr-список-контей-e';
import IISPrТоварыEForm from './forms/i-i-s-pr-товары-e';
import IISPrДокумПоставкиModel from './models/i-i-s-pr-докум-поставки';
import IISPrДокумРаспрModel from './models/i-i-s-pr-докум-распр';
import IISPrДокумРезПостModel from './models/i-i-s-pr-докум-рез-пост';
import IISPrИнфОЗаказеModel from './models/i-i-s-pr-инф-о-заказе';
import IISPrКлиентыModel from './models/i-i-s-pr-клиенты';
import IISPrОрганизацияModel from './models/i-i-s-pr-организация';
import IISPrПунктПогрузкиModel from './models/i-i-s-pr-пункт-погрузки';
import IISPrСотрудникиModel from './models/i-i-s-pr-сотрудники';
import IISPrСписокБаржModel from './models/i-i-s-pr-список-барж';
import IISPrСписокКонтейModel from './models/i-i-s-pr-список-контей';
import IISPrТоварыModel from './models/i-i-s-pr-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pr-докум-поставки': IISPrДокумПоставкиModel,
    'i-i-s-pr-докум-распр': IISPrДокумРаспрModel,
    'i-i-s-pr-докум-рез-пост': IISPrДокумРезПостModel,
    'i-i-s-pr-инф-о-заказе': IISPrИнфОЗаказеModel,
    'i-i-s-pr-клиенты': IISPrКлиентыModel,
    'i-i-s-pr-организация': IISPrОрганизацияModel,
    'i-i-s-pr-пункт-погрузки': IISPrПунктПогрузкиModel,
    'i-i-s-pr-сотрудники': IISPrСотрудникиModel,
    'i-i-s-pr-список-барж': IISPrСписокБаржModel,
    'i-i-s-pr-список-контей': IISPrСписокКонтейModel,
    'i-i-s-pr-товары': IISPrТоварыModel
  },

  'application-name': 'Логистика',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Логистика',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Логистика',
          title: 'Logistika1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-pr-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          'информация-об-организации': {
            caption: 'Информация об организации',
            title: 'Информация об организации',
            'i-i-s-pr-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-pr-клиенты-l': {
              caption: 'Клиенты',
              title: 'Клиенты'
            },
            'i-i-s-pr-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-pr-пункт-погрузки-l': {
              caption: 'Пункт погрузки',
              title: 'Пункт погрузки'
            },
            'i-i-s-pr-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-pr-сотрудники-l': {
              caption: 'Сотрудники',
              title: 'Сотрудники'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-pr-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            },
            'i-i-s-pr-докум-распр-l': {
              caption: 'Документ распределения по баржам',
              title: 'Докум распр'
            },
            'i-i-s-pr-докум-рез-пост-l': {
              caption: 'Документ результатов поставки',
              title: 'Докум рез пост'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-pr-докум-поставки-l': IISPrДокумПоставкиLForm,
    'i-i-s-pr-докум-распр-l': IISPrДокумРаспрLForm,
    'i-i-s-pr-докум-рез-пост-l': IISPrДокумРезПостLForm,
    'i-i-s-pr-клиенты-l': IISPrКлиентыLForm,
    'i-i-s-pr-организация-l': IISPrОрганизацияLForm,
    'i-i-s-pr-пункт-погрузки-l': IISPrПунктПогрузкиLForm,
    'i-i-s-pr-сотрудники-l': IISPrСотрудникиLForm,
    'i-i-s-pr-список-барж-l': IISPrСписокБаржLForm,
    'i-i-s-pr-список-контей-l': IISPrСписокКонтейLForm,
    'i-i-s-pr-товары-l': IISPrТоварыLForm,
    'i-i-s-pr-докум-поставки-e': IISPrДокумПоставкиEForm,
    'i-i-s-pr-докум-распр-e': IISPrДокумРаспрEForm,
    'i-i-s-pr-докум-рез-пост-e': IISPrДокумРезПостEForm,
    'i-i-s-pr-клиенты-e': IISPrКлиентыEForm,
    'i-i-s-pr-организация-e': IISPrОрганизацияEForm,
    'i-i-s-pr-пункт-погрузки-e': IISPrПунктПогрузкиEForm,
    'i-i-s-pr-сотрудники-e': IISPrСотрудникиEForm,
    'i-i-s-pr-список-барж-e': IISPrСписокБаржEForm,
    'i-i-s-pr-список-контей-e': IISPrСписокКонтейEForm,
    'i-i-s-pr-товары-e': IISPrТоварыEForm
  },

});

export default translations;
