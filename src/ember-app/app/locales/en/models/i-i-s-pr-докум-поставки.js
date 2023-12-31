export default {
  projections: {
    ДокумПоставкиE: {
      дата: {
        __caption__: 'Дата'
      },
      номДокПостав: {
        __caption__: 'Номер документа поставки'
      },
      клиенты: {
        __caption__: 'Заказчик',
        заказчик: {
          __caption__: 'Заказчик'
        },
        телефон: {
          __caption__: 'Телефон'
        },
        адресПоставки: {
          __caption__: 'Адрес поставки'
        }
      },
      организация: {
        __caption__: 'Наименование организации',
        наимОрганиз: {
          __caption__: 'Наименование организации'
        },
        сотрудники: {
          __caption__: '',
          фИОСотруд: {
            __caption__: 'ФИО сотрудника'
          }
        }
      },
      инфОЗаказе: {
        __caption__: 'Информация о заказе',
        товары: {
          __caption__: 'Наименование товара',
          наимТовара: {
            __caption__: 'Наименование товара'
          },
          единицыИзмер: {
            __caption__: 'Единицы измерения'
          },
          цена: {
            __caption__: 'Цена'
          }
        },
        количество: {
          __caption__: 'Количество'
        }
      }
    },
    ДокумПоставкиL: {
      дата: {
        __caption__: 'Дата'
      },
      номДокПостав: {
        __caption__: 'Номер документа поставки'
      },
      клиенты: {
        __caption__: 'Заказчик',
        заказчик: {
          __caption__: 'Заказчик'
        }
      },
      организация: {
        __caption__: 'Наименование организации',
        наимОрганиз: {
          __caption__: 'Наименование организации'
        },
        сотрудники: {
          __caption__: '',
          фИОСотруд: {
            __caption__: 'ФИО сотрудника'
          }
        }
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата'
    },
    номДокПостав: {
      __caption__: 'Номер документа поставки'
    },
    клиенты: {
      __caption__: 'Заказчик'
    },
    организация: {
      __caption__: 'Наименование организации'
    },
    инфОЗаказе: {
      __caption__: 'Информация о заказе'
    }
  }
};
