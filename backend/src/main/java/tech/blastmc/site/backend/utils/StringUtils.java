package tech.blastmc.site.backend.utils;

import java.util.Random;

public class StringUtils {

	private static final Random RANDOM = new Random();
	private static final String SLUG_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	public static String generateSlug(int length) {
		StringBuilder sb = new StringBuilder(length);
		for (int i = 0; i < length; i++) {
			sb.append(SLUG_CHARS.charAt(RANDOM.nextInt(SLUG_CHARS.length())));
		}
		return sb.toString();
	}
}