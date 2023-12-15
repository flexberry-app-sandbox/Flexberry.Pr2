package Pr.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pr.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ПунктПогрузки
 */
@Entity(name = "IISPrПунктПогрузки")
@Table(schema = "public", name = "ПунктПогрузки")
public class PunktPogruzki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "НаимПункта")
    private String наимпункта;


    public PunktPogruzki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getНаимПункта() {
      return наимпункта;
    }

    public void setНаимПункта(String наимпункта) {
      this.наимпункта = наимпункта;
    }


}