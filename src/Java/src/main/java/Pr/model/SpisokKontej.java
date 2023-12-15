package Pr.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pr.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СписокКонтей
 */
@Entity(name = "IISPrСписокКонтей")
@Table(schema = "public", name = "СписокКонтей")
public class SpisokKontej {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКонтей")
    private Integer номерконтей;

    @Column(name = "НаимКонтей")
    private String наимконтей;


    public SpisokKontej() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКонтей() {
      return номерконтей;
    }

    public void setНомерКонтей(Integer номерконтей) {
      this.номерконтей = номерконтей;
    }

    public String getНаимКонтей() {
      return наимконтей;
    }

    public void setНаимКонтей(String наимконтей) {
      this.наимконтей = наимконтей;
    }


}