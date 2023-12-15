package Pr.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pr.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СписокБарж
 */
@Entity(name = "IISPrСписокБарж")
@Table(schema = "public", name = "СписокБарж")
public class SpisokBarzh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерБаржи")
    private Integer номербаржи;

    @Column(name = "Производитель")
    private String производитель;


    public SpisokBarzh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерБаржи() {
      return номербаржи;
    }

    public void setНомерБаржи(Integer номербаржи) {
      this.номербаржи = номербаржи;
    }

    public String getПроизводитель() {
      return производитель;
    }

    public void setПроизводитель(String производитель) {
      this.производитель = производитель;
    }


}