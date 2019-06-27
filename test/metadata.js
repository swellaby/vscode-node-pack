'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Metadata Tests:', () => {
    test('Should have the correct name', () => {
        assert.deepEqual(manifest.name, 'node-pack');
    });

    test('Should have the correct display name', () => {
        assert.deepEqual(manifest.displayName, 'Node Extension Pack');
    });

    test('Should have the correct description', () => {
        assert.deepEqual(manifest.description, 'Extension Pack for Node');
    });

    test('Should have the correct publisher', () => {
        assert.deepEqual(manifest.publisher, 'Swellaby');
    });

    test('Should have correct extension categories', () => {
        assert.isTrue(manifest.categories.includes('Extension Packs'));
    });

    test('Should have correct keywords', () => {
        assert.deepEqual(manifest.keywords.length, 3);
        assert.isTrue(manifest.keywords.includes('node'));
        assert.isTrue(manifest.keywords.includes('nodejs'));
        assert.isTrue(manifest.keywords.includes('javascript'));
    });

    test('Should have the correct icon', () => {
        assert.deepEqual(manifest.icon, 'images/icon.png');
    });

    test('Should have the correct gallery banner', () => {
        const galleryBanner = manifest.galleryBanner;
        assert.deepEqual(galleryBanner.color.toLowerCase(), '#333333');
        assert.deepEqual(galleryBanner.theme, 'dark');
    });

    test('Should have correct VS Code engine', () => {
        assert.deepEqual(manifest.engines.vscode, '^1.0.0');
    });
});
