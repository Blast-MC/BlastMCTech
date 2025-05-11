package tech.blastmc.site.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tech.blastmc.site.backend.utils.StringUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@Service
public class UploadService {
	private static final String UPLOAD_DIR = "/home/www/i.blastmc.tech";

	public String saveFile(MultipartFile file, boolean useOriginalName) {
		try {
			String originalName = file.getOriginalFilename();
			if (originalName == null) throw new IllegalArgumentException("Missing filename");

			String ext = originalName.contains(".") ? originalName.substring(originalName.lastIndexOf('.')) : "";
			String name = useOriginalName ? originalName : StringUtils.generateSlug(5) + ext;

			Path destination = Path.of(UPLOAD_DIR, name);
			Files.createDirectories(destination.getParent());
			Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

			return name;
		} catch (IOException e) {
			throw new RuntimeException("Failed to save file", e);
		}
	}
}