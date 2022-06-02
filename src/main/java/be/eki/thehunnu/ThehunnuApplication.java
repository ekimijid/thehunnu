package be.eki.thehunnu;

import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Theme(value = "thehunnu")
@PWA(name = "the hunnu", shortName = "the hunnu", offlineResources = {"images/logo.png"})
public class ThehunnuApplication {

    public static void main(String[] args) {
        SpringApplication.run(ThehunnuApplication.class, args);
    }

}
