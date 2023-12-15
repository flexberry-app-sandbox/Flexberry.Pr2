package Pr.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pr.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ИнфОЗаказе
 */
@Entity(name = "IISPrИнфОЗаказе")
@Table(schema = "public", name = "ИнфОЗаказе")
public class InfOZakaze {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovary")
    @Convert("Tovary")
    @Column(name = "Товары", length = 16, unique = true, nullable = false)
    private UUID _tovaryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovary", insertable = false, updatable = false)
    private Tovary tovary;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumPostavki")
    @Convert("DokumPostavki")
    @Column(name = "ДокумПоставки", length = 16, unique = true, nullable = false)
    private UUID _dokumpostavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumPostavki", insertable = false, updatable = false)
    private DokumPostavki dokumpostavki;


    public InfOZakaze() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}