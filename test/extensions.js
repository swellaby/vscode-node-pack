'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Included Extensions Tests', () => {
    const extensions = manifest.extensionPack;

    test('Should have the correct number of extensions', () => {
        assert.deepEqual(extensions.length, 5);
    });

    test('Should include IntelliCode extension', () => {
        assert.isTrue(extensions.includes('VisualStudioExptTeam.vscodeintellicode'));
    });

    test('Should include eslint extension', () => {
        assert.isTrue(extensions.includes('dbaeumer.vscode-eslint'));
    });

    test('Should include Path Intellisense extension', () => {
        assert.isTrue(extensions.includes('christian-kohler.path-intellisense'));
    });

    test('Should include npm Intellisense extension', () => {
        assert.isTrue(extensions.includes('christian-kohler.npm-intellisense'));
    });

    test('Should include VersionLens extension', () => {
        assert.isTrue(extensions.includes('pflannery.vscode-versionlens'));
    });
});
