package tech.blastmc.site.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import tech.blastmc.site.backend.services.UploadService;

@RestController
@RequestMapping("/upload")
public class UploadController {

	private final UploadService uploadService;

	public UploadController(UploadService uploadService) {
		this.uploadService = uploadService;
	}

	@PostMapping
	public ResponseEntity<String> handleUpload(
			@RequestParam("file") MultipartFile file,
			@RequestParam(value = "useOriginalName", defaultValue = "false") boolean useOriginalName
	) {
		String resultUrl = uploadService.saveFile(file, useOriginalName);
		return ResponseEntity.ok(resultUrl);
	}
}