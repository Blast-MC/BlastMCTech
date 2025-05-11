plugins {
    id("org.springframework.boot") version "3.2.5"
    id("io.spring.dependency-management") version "1.1.4"
    java
}

group = "tech.blastmc.site.backend"
version = "1.0.0-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_21

repositories {
    mavenCentral()
}

dependencies {
    // Spring Boot Web (includes file upload support)
    implementation("org.springframework.boot:spring-boot-starter-web")

}
