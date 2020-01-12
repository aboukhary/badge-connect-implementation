import * as express from 'express';

import * as Manifest from './controllers/manifest.controller';
import * as Profile from './controllers/profile.controller';
import * as Assertion from './controllers/assertion.controller';
import verifyToken from './utils/verifyToken';
import {checkAccessToken} from './utils/checkAccessToken';

const router = express.Router();

router.get('/health', (req, res) => res.status(200).send());
router.get('/.well-known/badgeconnect.json', Manifest.wellKnown);

// Assertion
router.post(
  '/assertion',
  verifyToken,
  Assertion.validateCreateAssertion,
  Assertion.createAssertion
);

router.get('/assertion', checkAccessToken,  Assertion.findAssertions);

// Profile
router.post(
  '/profile',
  verifyToken,
  Profile.validateCreateProfile,
  Profile.createProfile
);
router.get('/profile', checkAccessToken , Profile.findProfile);

export default router;
